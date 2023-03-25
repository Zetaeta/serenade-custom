serenade.app("code").command("new file", async (api, matches) => {
  await api.evaluateInPlugin("explorer.newFile");
  // await api.typeText(".rb");
  // await api.pressKey("left", [command]);
});

serenade.app("code").command("terminal", async (api, matches) => {
  await api.evaluateInPlugin("terminal.focus");
});

serenade.app("code").command("files", async (api, matches) => {
  await api.evaluateInPlugin("workbench.explorer.fileView.focus");
});

serenade.app("code").command("editor", async (api, matches) => {
  await api.evaluateInPlugin("workbench.action.focusActiveEditorGroup");
});

serenade.app("code").command("command", async (api, matches) => {
  await api.pressKey("p", ["control", "shift"]);
});

serenade.app("code").command("source control", async (api, matches) => {
  await api.pressKey("g", ["control", "shift"]);
});
serenade.app("code").command("search", async (api, matches) => {
  await api.pressKey("f", ["control", "shift"]);
});
serenade.app("code").command("extensions", async (api, matches) => {
  await api.pressKey("x", ["control", "shift"]);
});
