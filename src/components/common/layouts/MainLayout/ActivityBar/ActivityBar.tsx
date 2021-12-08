import { AccountIcon, SettingsGearIcon } from "@src/components/common/icons";

import { ACTION_ITEMS } from "../action-items";

import ActionItem from "./ActionItem";

import Style from "./ActivityBar.style";

export type ActivityBarProps = {
  selectedActionItem: number | null;
  onSelectedActionItemChange: (index: number | null) => void;
};

export default function ActivityBar({
  selectedActionItem,
  onSelectedActionItemChange,
}: ActivityBarProps) {
  const handleActionItemClick = (index: number) => () => {
    onSelectedActionItemChange(index === selectedActionItem ? null : index);
  };

  const renderActionItems = () => {
    return ACTION_ITEMS.map(({ label, Icon }, index) => (
      <ActionItem
        key={label}
        Icon={Icon}
        onClick={handleActionItemClick(index)}
        isSelected={index === selectedActionItem}
      />
    ));
  };

  return (
    <Style.Wrapper>
      <ul>{renderActionItems()}</ul>
      <ul>
        <ActionItem Icon={AccountIcon} onClick={() => null} />
        <ActionItem Icon={SettingsGearIcon} onClick={() => null} />
      </ul>
    </Style.Wrapper>
  );
}