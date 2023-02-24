serenade.global().command(
  "send to <%number%>",
  async (api, matches) => {
    let num = getWorkspace(matches.number);
    console.log(num);
    await api.pressKey(num, ["win", "shift"]);
  },
  { autoExecute: true }
);
serenade.global().command(
  "screen <%number%>",
  async (api, matches) => {
    let num = matches.number;
    if (num === "big") {
      num = "w";
    }
    if (num === "small") {
      num = "e";
    }
    await api.pressKey(num, ["win"]);
  },
  { autoExecute: true }
);
serenade.global().command(
  "window <%number%>",
  async (api, matches) => {
    let num = matches.number;
    if (num === "next") {
      num = "j";
    }
    if (num === "last") {
      num = "k";
    }
    await api.pressKey(num, ["win"]);
  },
  { autoExecute: true }
);
serenade.global().command("console", async (api) => {
  await api.focusOrLaunchApplication("konsole");
});

function getWorkspace(match) {
  if (match === "ivy" || match === "quad" || match === "code") {
    match = "4";
  }
  if (match === "soon") {
    match = "2";
  }
  return match;
}
