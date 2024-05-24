import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const articles = [
  {
    title: "Global Market Rally",
    description: "Stocks around the world have surged as investors become more optimistic about economic recovery.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Innovations in 2023",
    description: "The tech industry is poised for significant advancements in AI and machine learning.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Political Shifts in Europe",
    description: "Recent elections in Europe have led to significant political changes.",
    image: "https://via.placeholder.com/150",
  },
];

const trendingArticles = [
  "Market hits all-time high",
  "New tech startups to watch",
  "Global economic outlook",
  "Political tensions rise",
  "Breakthroughs in renewable energy",
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/world">World</Link>
          <Link as={RouterLink} to="/business">Business</Link>
          <Link as={RouterLink} to="/markets">Markets</Link>
          <Link as={RouterLink} to="/opinion">Opinion</Link>
          <Link as={RouterLink} to="/tech">Tech</Link>
        </HStack>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={4}>
        <Box as="main" gridColumn={{ md: "span 2" }}>
          {articles.map((article, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
              <Image src={article.image} alt={article.title} />
              <Box p={4}>
                <Heading as="h2" size="md" mb={2}>{article.title}</Heading>
                <Text>{article.description}</Text>
              </Box>
            </Box>
          ))}
        </Box>

        <Box as="aside">
          <Heading as="h3" size="lg" mb={4}>Trending</Heading>
          <VStack align="start" spacing={2}>
            {trendingArticles.map((title, index) => (
              <Link key={index} href="#" color="blue.500">{title}</Link>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>

      <Flex as="footer" bg="gray.800" color="white" p={4} mt={8} justifyContent="space-between">
        <Text>&copy; 2023 Financial Times</Text>
        <HStack spacing={4}>
          <Link href="#">Contact</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;