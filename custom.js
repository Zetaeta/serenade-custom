/* Serenade Custom Commands

In this file, you can define your own custom commands with the Serenade API.

For instance, here's a custom automation that opens your terminal and runs a command:

serenade.global().command("make", api => {
  api.focusApplication("terminal");
  api.typeText("make clean && make");
  api.pressKey("return");
});

And, here's a Python snippet for creating a test method:

serenade.language("python").snippet(
  "test method <%identifier%>",
  "def test_<%identifier%>(self):<%newline%><%indent%>pass",
  { "identifier": ["underscores"] }
  "method"
);

For more information, check out the Serenade API documentation: https://serenade.ai/docs/api

*/
serenade.app("chrome").command("find <%text%>", async (api, matches) => {
  await api.pressKey("f", ["control"]);
  await api.typeText(matches.text);
});

serenade.global().command("zoom in", async (api, matches) => {
  await api.pressKey("+", ["control"]);
});
serenade.global().command("zoom out", async (api, matches) => {
  await api.pressKey("-", ["control"]);
});
//serenade.global().command("cancel", (api) => {
//  api.pressKey("z", ["control"]);
//});

serenade.global().command("foe", (api) => {
  api.typeText("of");
});

serenade.global().command("control <%number%>", async (api, matches) => {
  await api.pressKey(matches.number, ["control"]);
});
serenade.global().command("shift control <%number%>", async (api, matches) => {
  await api.pressKey(matches.number, ["control", "shift"]);
});
serenade.global().command(
  "input <%text%>",
  async (api, matches) => {
    await api.typeText(matches.text);
  },
  { autoExecute: true }
);
