"use client";

import Button from "@/components/core/button";
import Icon from "@/components/core/icon";
import UserActions from "@/components/dashboard/user-actions";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="sm" iconOnly={true}>
          <Icon icon="Search" className="size-4" />
        </Button>
        <Button variant="ghost" size="sm" iconOnly={true}>
          <Icon icon="Settings" className="size-4" />
        </Button>
        <Button variant="ghost" size="sm" iconOnly={true}>
          <Icon icon="Bell" className="size-4" />
        </Button>
      </div>
      <UserActions />
    </div>
  );
}
