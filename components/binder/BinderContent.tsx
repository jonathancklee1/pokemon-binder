"use client";
import { useState } from "react";
import BinderFolder from "./BinderFolder";
import BinderMenu from "./BinderMenu";

function BinderContent() {
  const [pocketNumber, setPocketNumber] = useState<4 | 9 | 12>(4);
  return (
    <div>
      <BinderMenu
        pocketNumber={pocketNumber}
        setPocketNumber={setPocketNumber}
      />
      <BinderFolder pocketSize={pocketNumber} />
    </div>
  );
}

export default BinderContent;
