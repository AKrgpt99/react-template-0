import React, { useEffect } from "react";
import clsx from "clsx";

import { useStyles } from "./styles";
import emojis from "./emojis.csv";

function Emoji({ description, width, className }) {
  const classes = useStyles();
  let emoji = emojis.find(
    (row) => row.description && row.description.includes(description)
  );
  emoji = emoji.emoji ? emoji.emoji : null;

  return (
    <div className={clsx(classes.emoji, className)} style={{ fontSize: width }}>
      {emoji}
    </div>
  );
}

export default Emoji;
