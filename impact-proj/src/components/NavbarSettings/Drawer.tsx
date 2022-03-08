import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";

import Menu from "./Menu";

function DrawerComp() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //   const btnRef = React.useRef(0);

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Menu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerComp;

//ref={btnRef}
//finalFocusRef={btnRef}
