import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { profile, useFilterProfile } from "@/hooks/useFilterProfile";
import { switchType, useFilterSwitchType } from "@/hooks/useFilterSwitchType";

type ProductsFilterProps = {
  resetCurrentPage: () => void;
};

function ProductsFilter({ resetCurrentPage }: ProductsFilterProps) {
  const { filterProfile, setFilterProfile } = useFilterProfile();
  const { filterSwitchType, setFilterSwitchType } = useFilterSwitchType();

  function applyFilterProfile(
    profileVal: (typeof profile)[keyof typeof profile],
  ) {
    resetCurrentPage();
    setFilterProfile(profileVal);
  }

  function applyFilterSwitchType(
    switchVal: (typeof switchType)[keyof typeof switchType],
  ) {
    resetCurrentPage();
    setFilterSwitchType(switchVal);
  }

  return (
    <>
      <h2 className="mb-4 text-lg font-bold">Filters</h2>
      <Accordion type="multiple">
        <AccordionItem value="profile">
          <AccordionTrigger className="text-base font-medium">
            Profile
          </AccordionTrigger>

          <AccordionContent>
            <ul className="grid gap-2.5">
              <li className="flex items-center gap-2">
                <Checkbox
                  id="allProfile"
                  checked={
                    filterProfile !== profile.normal &&
                    filterProfile !== profile.low
                  }
                  onCheckedChange={() => applyFilterProfile(profile.all)}
                />
                <Label className="font-normal" htmlFor="allProfile">
                  All
                </Label>
              </li>

              <li className="flex items-center gap-2">
                <Checkbox
                  id="normalProfile"
                  checked={filterProfile === profile.normal}
                  onCheckedChange={() => applyFilterProfile(profile.normal)}
                />
                <Label className="font-normal" htmlFor="normalProfile">
                  Normal Profile
                </Label>
              </li>

              <li className="flex items-center gap-2">
                <Checkbox
                  id="lowProfile"
                  checked={filterProfile === profile.low}
                  onCheckedChange={() => applyFilterProfile(profile.low)}
                />
                <Label className="font-normal" htmlFor="lowProfile">
                  Low Profile
                </Label>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="switchType">
          <AccordionTrigger className="text-base font-medium">
            Switch Type
          </AccordionTrigger>

          <AccordionContent>
            <ul className="grid gap-2.5">
              <li className="flex items-center gap-2">
                <Checkbox
                  id="switchLinear"
                  checked={
                    filterSwitchType !== switchType.linear &&
                    filterSwitchType !== switchType.tactile &&
                    filterSwitchType !== switchType.clicky
                  }
                  onCheckedChange={() => applyFilterSwitchType(switchType.all)}
                />
                <Label className="font-normal" htmlFor="switchLinear">
                  All
                </Label>
              </li>
              <li className="flex items-center gap-2">
                <Checkbox
                  id="switchLinear"
                  checked={filterSwitchType === switchType.linear}
                  onCheckedChange={() =>
                    applyFilterSwitchType(switchType.linear)
                  }
                />
                <Label className="font-normal" htmlFor="switchLinear">
                  Linear
                </Label>
              </li>
              <li className="flex items-center gap-2">
                <Checkbox
                  id="switchLinear"
                  checked={filterSwitchType === switchType.tactile}
                  onCheckedChange={() =>
                    applyFilterSwitchType(switchType.tactile)
                  }
                />
                <Label className="font-normal" htmlFor="switchLinear">
                  Tactile
                </Label>
              </li>
              <li className="flex items-center gap-2">
                <Checkbox
                  id="switchLinear"
                  checked={filterSwitchType === switchType.clicky}
                  onCheckedChange={() =>
                    applyFilterSwitchType(switchType.clicky)
                  }
                />
                <Label className="font-normal" htmlFor="switchLinear">
                  Clicky
                </Label>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default ProductsFilter;
