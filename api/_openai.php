<?php
/**
 * Minimal OpenAI Responses API client over cURL: no Composer, runs on shared
 * hosting. Writes the admin area's read of the visitor numbers (_views.php).
 */
// OpenAI's newest model (September 2026). gpt-6-astra is the larger one, if a deeper read is ever worth its price.
const OPENAI_MODEL = 'gpt-6.1-sol';

/**
 * One Responses API request, retried twice when the API is busy. Nothing is stored at OpenAI
 * (store: false). Returns the decoded response; throws with the API's own message when it fails.
 */
function openai_request(array $body): array
{
    $payload = json_encode(['model' => OPENAI_MODEL, 'store' => false] + $body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    for ($attempt = 0; ; $attempt++) {
        $ch = curl_init('https://api.openai.com/v1/responses');
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $payload,
            CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Authorization: Bearer ' . OPENAI_API_KEY],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 150,
        ]);
        $raw = curl_exec($ch);
        $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $err = curl_error($ch);
        curl_close($ch);
        $busy = $raw === false || $status === 429 || $status >= 500;
        if ($busy && $attempt < 2) { sleep(2 + 2 * $attempt); continue; }
        if ($raw === false) throw new RuntimeException('OpenAI could not be reached: ' . $err);
        $res = json_decode($raw, true) ?: [];
        if ($status !== 200) throw new RuntimeException($res['error']['message'] ?? "OpenAI answered $status.");
        return $res;
    }
}

/** The text of a response, once it is clear the model finished it and did not decline. */
function openai_text(array $res): string
{
    if (($res['status'] ?? '') === 'incomplete') {
        $why = $res['incomplete_details']['reason'] ?? 'unknown';
        throw new RuntimeException($why === 'max_output_tokens' ? 'The model ran out of room before it finished.' : "The model stopped early ($why).");
    }
    $text = '';
    foreach ($res['output'] ?? [] as $item) {
        if (($item['type'] ?? '') !== 'message') continue;
        foreach ($item['content'] ?? [] as $part) {
            if (($part['type'] ?? '') === 'refusal') throw new RuntimeException('The model declined to write this one: ' . ($part['refusal'] ?? ''));
            if (($part['type'] ?? '') === 'output_text') $text .= $part['text'];
        }
    }
    return $text;
}
