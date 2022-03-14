import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { lighten } from "@chakra-ui/theme-tools";

const Header = () => {
  const nameOfGames = [
    "Fortnite",
    "Rocket League",
    "Apex Legends",
    "Free Fire",
  ];

  return (
    <div>
      <Box
        h={20}
        w={"100%"}
        borderBottomWidth="1px"
        borderBottomColor="brand.primary"
      >
        <Flex
          maxW="1200px"
          mx="auto"
          h="100%"
          justifyContent="space-between"
          alignItems="Center"
          px={4}
          color="brand.primary"
        >
          <Flex>
            <Heading as="h1" fontFamily="body" fontSize="2rem">
              {"DailyShop's"}
            </Heading>
          </Flex>
          <Flex gap={2}>
            {nameOfGames.map((nameOfGame) => (
              <Link
                key={nameOfGame}
                p={2}
                fontSize="18px"
                _hover={{
                  textDecoration: "none",
                  color: lighten("brand.primary", 10),
                }}
              >
                {nameOfGame}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export { Header };
