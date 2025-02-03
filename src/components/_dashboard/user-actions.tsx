"use client";

import { signOut } from "next-auth/react";
import Dropdown from "@/components/core/dropdown";
import UserAvatar from "@/components/dashboard/user-avatar";

export default function UserActions() {
  return (
    <Dropdown.DropdownRoot>
      <Dropdown.DropdownTrigger asChild>
        <button className="flex items-center">
          <UserAvatar />
        </button>
      </Dropdown.DropdownTrigger>
      <Dropdown.DropdownContent align="end" className="w-64">
        <Dropdown.DropdownLabel>My Account</Dropdown.DropdownLabel>
        <Dropdown.DropdownSeparator />
        <Dropdown.DropdownGroup>
          <Dropdown.DropdownItem>
            Profile
            <Dropdown.DropdownShortcut>⇧⌘P</Dropdown.DropdownShortcut>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem>
            Billing
            <Dropdown.DropdownShortcut>⌘B</Dropdown.DropdownShortcut>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem>
            Settings
            <Dropdown.DropdownShortcut>⌘S</Dropdown.DropdownShortcut>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem>
            Keyboard shortcuts
            <Dropdown.DropdownShortcut>⌘K</Dropdown.DropdownShortcut>
          </Dropdown.DropdownItem>
        </Dropdown.DropdownGroup>
        <Dropdown.DropdownSeparator />
        <Dropdown.DropdownItem>GitHub</Dropdown.DropdownItem>
        <Dropdown.DropdownItem>Support</Dropdown.DropdownItem>
        <Dropdown.DropdownItem disabled>API</Dropdown.DropdownItem>
        <Dropdown.DropdownSeparator />
        <Dropdown.DropdownItem onClick={() => signOut()}>
          Log out
          <Dropdown.DropdownShortcut>⇧⌘Q</Dropdown.DropdownShortcut>
        </Dropdown.DropdownItem>
      </Dropdown.DropdownContent>
    </Dropdown.DropdownRoot>
  );
}
