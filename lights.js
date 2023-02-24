function lightControl(api, method, arguments = []) {
  api.runShell("dbus-send", [
    "--session",
    "--type=method_call",
    "--dest=net.zetaeta.BtLed.Controller",
    "/BtLed/Controller",
    "net.zetaeta.BtLed.Controller." + method,
    ...arguments,
  ]);
}

function rgb(api, rgb) {
  lightControl(
    api,
    "rgb",
    rgb.map((x) => "int32:" + x)
  );
}

// serenade.global().command("lights on", async (api) => {
//   lightControl(api, "powerOn");
// });
// serenade.global().command("lights off", async (api) => {
//   lightControl(api, "powerOff");
// });
const colors = {
  red: [255, 0, 0],
  green: [0, 255, 0],
  blue: [0, 0, 255],
  yellow: [255, 255, 0],
  magenta: [255, 0, 255],
  cyan: [0, 255, 255],
  white: [255, 255, 255],
};
serenade.global().command(
  "lights <%command%>",
  async (api, matches) => {
    const parts = matches.command.split(" ");
    console.log(parts);
    if (parts[0] == "on") {
      lightControl(api, "powerOn");
    } else if (parts[0] == "off") {
      lightControl(api, "powerOff");
    } else if (parts[0] == "rgb") {
      // const [_, r, g, b] = parts;
      const rgb = parts.slice(1);
      lightControl(
        api,
        "rgb",
        rgb.map((x) => "int32:" + x)
      );
    } else if (colors[parts[0]]) {
      rgb(api, colors[parts[0]]);
    }
  },
  { autoExecute: true }
);
