import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export function VideoModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Lorem, ipsum.</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
