export function print(message) {
  process.stdout.write(`${message.trimEnd()}\n`);
}

export function error(message) {
  process.stderr.write(`${message.trimEnd()}\n`);
}
