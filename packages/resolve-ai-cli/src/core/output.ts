export function print(message: string): void {
  process.stdout.write(`${message.trimEnd()}\n`);
}

export function error(message: string): void {
  process.stderr.write(`${message.trimEnd()}\n`);
}
