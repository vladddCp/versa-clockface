const color_set = [
  { color: "#f5f5f5" },
  { color: "#A0A0A0" },
  { color: "#505050" },
  { color: "#303030" },
  { color: "#2d3436" },
  { color: "#000000" },

  { color: "#badc58" },
  { color: "#55efc4" },
  { color: "#81ecec" },
  { color: "#7ed6df" },
  { color: "#74b9ff" },
  { color: "#a29bfe" },

  { color: "#6ab04c" },
  { color: "#00b894" },
  { color: "#00cec9" },
  { color: "#22a6b3" },
  { color: "#0984e3" },
  { color: "#6c5ce7" },

  { color: "#30336b" },
  { color: "#ffeaa7" },
  { color: "#ffbe76" },
  { color: "#fab1a0" },
  { color: "#ff7675" },
  { color: "#fd79a8" },

  { color: "#130f40" },
  { color: "#fdcb6e" },
  { color: "#f0932b" },
  { color: "#e17055" },
  { color: "#d63031" },
  { color: "#e84393" },
];

const options = [
  ["Line Color", "color_line"],
  ["Step Counter Color", "color_steps"],
  ["Calorie Counter Color", "color_cals"],
  ["Activity Time Color", "color_active"],
  ["Heart Rate Color", "color_heart"],
];

function mySettings(props) {
  return (
    <Page>
      <Section title="Options">
        <Toggle settingsKey="fahrenheit" label="Use Fahrenheit" />
        <Button list label="Reset Colors to Default" onClick={function() {
          props.settingsStorage.setItem("color_line", JSON.stringify("#642a17"));
          props.settingsStorage.setItem("color_steps", JSON.stringify("#bcd8f8"));
          props.settingsStorage.setItem("color_cals", JSON.stringify("#7898f8"));
          props.settingsStorage.setItem("color_active", JSON.stringify("#d893ff"));
          props.settingsStorage.setItem("color_heart", JSON.stringify("#f83c40"));
        }}
      />
      </Section>
      {options.map(([title, settingsKey]) =>
        <Section title={title}>
          <ColorSelect settingsKey={settingsKey} colors={color_set} />
        </Section>
      )}
    </Page>
  );
}

registerSettingsPage(mySettings);