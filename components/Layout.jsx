import React from 'react'
import {
    Box,
    Image,
    Text,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Switch,
    Button,
    useBoolean,
} from '@chakra-ui/react'


export default function Layout() {

    const [slider, setSlider] = React.useState(50);
    const [proSlider, setProSlider] = React.useState(37.5);
    const [checkbox, setCheckbox] = useBoolean();

    function showPrice() {
        if (checkbox === false) {
            return slider.toFixed(2);
        }
        else {
            return proSlider.toFixed(2);
        }
    }


  return (
      <Box>
          {/* Layout */}
          <Box width={['100%']} height={['800px']} backgroundColor='#ffffff' display={'flex'} flexDirection='column' alignItems={'center'}>
              {/* Simple Traffic Box */}
              <Box
                  width={'100%'}
                  height={['400px']}
                  backgroundColor='#F1F5FE'
                  borderBottomLeftRadius={'192px'}
                  display='flex'
                  flexDirection={'column'}
                  alignItems={['center']}
              >
                  {/* circle-image Box */}
                  <Box
                      width={['146px']}
                      height={['145px']}
                      position={'relative'}
                      top={['57px']}
                      zIndex='0'
                  >
                      <Image src='images/pattern-circles.svg' alt='circles' />
                  </Box>

                  {/* Text simple traffic Box */}
                  <Box
                      width={['326px']}
                      height={['81px']}
                      position='absolute'
                      top={['89px']}
                      zIndex={'1'}
                      display='flex'
                      flexDirection={'column'}
                      alignItems='center'
                      justifyContent={'space-between'}
                  >
                      <Text fontSize={'20'} fontWeight='800' color={'#293356'}>
                          Simple, traffic-based pricing
                      </Text>
                      <Text textAlign={'center'} fontSize={['13px']} color='#848EAD'>
                          Sign-up for our 30-day trial. <br /> No credit card required.
                      </Text>
                  </Box>
              </Box>

              {/* Pageview Box */}
              <Box
                  width={['327px']}
                  height={['478px']}
                  position='absolute'
                  top={['234px']}
                  backgroundColor='#ffffff'
                  boxShadow={'2xl'}
                  display={['flex']}
                  flexDirection={['column']}
                  alignItems={['center']}
                  color='#848EAD'
              >
                  <Text
                      fontSize={['12px']}
                      textTransform='uppercase'
                      fontWeight={'800'}
                      position='absolute'
                      top={['34px']}
                  >
                      100k pageviews
                  </Text>

                  {/* Slider Box */}
                  <Box
                      width={['279px']}
                      height={['40px']}
                      position='absolute'
                      top={['75px']}
                  >
                      <Slider aria-label='slider-ex-1' defaultValue={50} onChange={(val) => {
                          if (checkbox === true) {
                              setProSlider(val - (val / 100 * 25));
                              
                          }
                          else {
                              setSlider(val);
                          }
                      }}
                          
                      >
                          <SliderTrack bg={'#ECF0FB'}>
                              <SliderFilledTrack bg={'#A4F3EB'} />
                          </SliderTrack>
                          <SliderThumb width={'35px'} height={'35px'}>
                              <Box>
                                  <Image src='/images/icon-slider.svg' alt='slider-icon' />
                              </Box>
                          </SliderThumb>
                      </Slider>
                  </Box>
                  
                  {/* Price Box */}
                  <Box
                      width={['167px']}
                      height={['44px']}
                      position={'absolute'}
                      top={['139px']}
                      display='flex'
                      flexDirection={'row'}
                      alignItems='center'
                      justifyContent={'center'}
                  >
                      <Text color={'#293356'} fontSize={['32px']} fontWeight='800' paddingRight={'5px'}>
                          ${showPrice()}
                      </Text>
                      <Text fontSize={['14px']} color='#848EAD'>
                          /month
                      </Text>
                  </Box>

                  {/* Monthly/Yearly Billing Box */}
                  <Box
                      width={['272px']}
                      height={['22']}
                      position={['absolute']}
                      top={['217px']}
                      display='flex'
                      flexDirection={'row'}
                      alignItems='center'
                      justifyContent={'space-between'}
                  >
                      <Text
                          fontSize={'12px'}
                          color='#848EAD'
                      >
                          Monthly Billing
                      </Text>

                      <Switch width={'43px'} height={'22px'} onChange={setCheckbox.toggle} />

                      <Text
                          fontSize={'12px'}
                          color='#848EAD'
                      >
                          Yearly Billing
                      </Text>

                      <Box
                          width={'42px'}
                          height={'19px'}
                          bg='#FEEDE8'
                          display={'flex'}
                          flexDirection='column'
                          alignItems={'center'}
                          justifyContent='center'
                          borderRadius={'10px'}
                      >
                          <Text
                              fontSize={'10px'}
                              fontWeight={['800']}
                              color='#FF8D68'
                          >
                              -25%
                          </Text>
                      </Box>
                      
                  </Box>

                  {/* Dividing line */}
                  <Box
                      width={'100%'}
                      height='1px'
                      bg={'#ECF0FB'}
                      position='absolute'
                      top={['277px']}
                  />

                  {/* Description Box */}
                  <Box
                      width={'148px'}
                      height={'71px'}
                      position='absolute'
                      top={['302px']}
                      display={'flex'}
                      flexDirection='column'
                      alignItems={'center'}
                      justifyContent='space-between'
                  >
                      <Box width={'100%'} display='flex' flexDirection={'row'} justifyContent='center' alignItems={'center'}>
                           <Image src='/images/icon-check.svg' alt='icon-check' boxSize={'10px'} />
                          <Text fontSize={'12px'} paddingLeft='8px' color={'#848EAD'}>Unlimited websites</Text>
                      </Box>
                      <Box width={'100%'} display='flex' flexDirection={'row'} justifyContent='center' alignItems={'center'}>
                          <Image src='/images/icon-check.svg' alt='icon-check' boxSize={'10px'} />
                          <Text fontSize={'12px'} paddingLeft='8px' color={'#848EAD'}>100% data ownership</Text>
                      </Box>
                      <Box width={'100%'} display='flex' flexDirection={'row'} justifyContent='center' alignItems={'center'}>
                          <Image src='/images/icon-check.svg' alt='icon-check' boxSize={'10px'} />
                          <Text fontSize={'12px'} paddingLeft='8px' color={'#848EAD'}>Email reports</Text>
                      </Box>
                  </Box>

                  {/* Button Box */}
                  
                      <Button
                          width={'170px'}
                          height={['41px']}
                          position='absolute'
                          top={['405px']}
                          bg='#293356'
                          color={'#BECDFF'}
                          fontSize='12px'
                          borderRadius={'20.5px'}
                          colorScheme='#293356'
                      >
                          Start my trial
                      </Button>   
                  
              </Box>
          </Box>  
      </Box>
      
  )
}
