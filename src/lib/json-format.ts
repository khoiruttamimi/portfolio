export function formatJsonSource(source: string, maxLength: number) {
  // The source has already been parsed. Keep the original spelling of each JSON value.
  const tokens = source.match(/"(?:[^"\\]|\\.)*"|[{}\[\],:]|[^\s{}\[\],:"]+/g) ?? [];
  let depth = 0;
  let previous = "";
  let formatted = "";

  for (const token of tokens) {
    const closesContainer = token === "}" || token === "]";
    const afterOpening = previous === "{" || previous === "[";
    if (closesContainer) depth -= 1;

    if (previous === ":") formatted += " ";
    else if (previous === "," || closesContainer !== afterOpening) {
      // An empty container has both conditions and stays on one line.
      formatted += `\n${"  ".repeat(depth)}`;
    }

    formatted += token;
    if (formatted.length > maxLength) return null;
    if (token === "{" || token === "[") depth += 1;
    previous = token;
  }

  return formatted;
}
