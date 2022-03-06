import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
  createIcon,
  useDisclosure,
} from "@chakra-ui/react";
import Icon from "./Icons/playIcon";

function Modalex() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        // variant={"solid"}
        // colorScheme={"white"}
        width={"100px"}
        height={"100px"}
        position={"absolute"}
        left={"50%"}
        top={"50%"}
        transform={"translateX(-50%) translateY(-50%)"}
        borderRadius={"100%"}
        onClick={onOpen}>
        <Icon icon="play3" size={"15px"} color="black" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalCloseButton />
        <ModalContent>
          <iframe
            width="962"
            height="541"
            src="https://www.youtube.com/embed/KI2lsdXJQ40"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modalex;
