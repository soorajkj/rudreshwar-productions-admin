"use client";

import React from "react";
import Button from "./core/button";
import Label from "./core/label";
import RadioGroup from "./core/radio-group";
import Checkbox from "@/components/core/checkbox";

export default function Temp() {
  return (
    <div className="grid gap-8">
      <div className="grid max-w-sm gap-4">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="destructive">Button</Button>
        <Button variant="link">Button</Button>
      </div>
      <div className="grid gap-4">
        <Checkbox size="sm" />
        <Checkbox size="sm" defaultChecked />
        <Checkbox size="sm" disabled />
        <Checkbox size="sm" defaultChecked disabled />
        <Checkbox size="md" />
        <Checkbox size="md" defaultChecked />
        <Checkbox size="md" disabled />
        <Checkbox size="md" defaultChecked disabled />
      </div>
      <div className="grid gap-4">
        <RadioGroup.RadioGroupRoot defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroup.RadioGroupItem value="default" id="r1" size="sm" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.RadioGroupItem value="comfortable" id="r2" size="sm" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.RadioGroupItem
              value="compact"
              id="r3"
              size="sm"
              disabled
            />
            <Label htmlFor="r3">Compact</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.RadioGroupItem value="new" id="r4" size="sm" disabled />
            <Label htmlFor="r4">Compact</Label>
          </div>
        </RadioGroup.RadioGroupRoot>
        <RadioGroup.RadioGroupRoot defaultValue="new">
          <div className="flex items-center space-x-2">
            <RadioGroup.RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.RadioGroupItem value="compact" id="r3" disabled />
            <Label htmlFor="r3">Compact</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.RadioGroupItem value="new" id="r4" disabled />
            <Label htmlFor="r4">Compact</Label>
          </div>
        </RadioGroup.RadioGroupRoot>
      </div>
    </div>
  );
}
