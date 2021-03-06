import React from 'react'
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
} from '@chakra-ui/react'

function SafetyInfoExplanation() {
  return (
    <>
      <Box
        p="5"
        borderWidth="0px"
        borderRadius="lg"
        mb="16px"
        w="100%"
        marginTop="100px"
      >
        <>
          <Accordion allowToggle allowMultiple>
            <Heading
              as="h2"
              size="md"
              letterSpacing={'tighter'}
              marginBottom="10px"
              color="blue.900"
            >
              More Information{' '}
            </Heading>
            <Text marginBottom="20px">
              Expand each item below to see more details
            </Text>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{
                    backgroundColor: 'blue.200',
                    color: 'black',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Staff Mask Protocol{' '}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                This refers to the rules a business may have in place around
                their staff and mask wearing. While there is not a 100%
                guarantee of compliance by staff, having protocols in place for
                mask wearing increases the likelihood of masks being worn by
                staff when you might come into contact with them.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{
                    backgroundColor: 'blue.200',
                    color: 'black',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Minimum Spacing Between Customers/Visitors{' '}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{
                    backgroundColor: 'blue.200',
                    color: 'black',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Ventalation on Site{' '}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{
                    backgroundColor: 'blue200',
                    color: 'black',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Vaccination Pass Requirements for Customers/Visitors:
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{
                    backgroundColor: 'blue.200',
                    color: 'black',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Staff Vaccination Requirements:
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{
                    backgroundColor: 'blue.200',
                    color: 'black',
                  }}
                >
                  <Box flex="1" textAlign="left">
                    Cleaning Protocols
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </>
      </Box>
    </>
  )
}

export default SafetyInfoExplanation
