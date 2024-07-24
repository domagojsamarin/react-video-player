function parseSRT(srt: string): any[] {
    const lines = srt.trim().split('\n\n');
    const subtitles = [];

    for (const line of lines) {
        const [index, time, ...textLines] = line.split('\n');
        const [startTime, endTime] = time.split(' --> ');
        const text = textLines.join('\n');

        subtitles.push({
            index: parseInt(index),
            startTime: startTime.trim(),
            endTime: endTime.trim(),
            text: text.trim(),
        });
    }
    console.log(subtitles);
    return subtitles;
}

export { parseSRT };