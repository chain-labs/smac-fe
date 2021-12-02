import React, { useState } from 'react'
import HorizontalScroll from "react-scroll-horizontal";
import Box from 'src/components/Box';


const AllTokens = () => {
    const [left, setLeft] = useState<string>("21rem");
    return (
        <Box position="relative" top="5rem" height="100%" ml={left} >
				<HorizontalScroll
					pageLock={false}
					reverseScroll={true}
					// style         = { {position:"relative",top:"50rem"} }
					// config        = {{ stiffness: int, damping: int }}
					// className     = { string }
					// animValues    = { int }
				>
                    <Box>
                        <Box display="flex" justifyContent="space-around" mb="2.4rem">
                    {
                        // arr?.map(c=>{
                        //     <Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>

                        // })
                    }
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
                            <Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
                            <Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>

						</Box>
						<Box display="flex" justifyContent="space-around" mb="2.4rem">
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
                            <Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
                            <Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>

						</Box>
						<Box display="flex" justifyContent="space-around" mb="2.4rem">
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
                            <Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
                            <Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>
							<Box as="img" src="/static/images/Nft1.png" height="196px" width="196px" mr="12px"></Box>

						</Box>
					</Box>
				</HorizontalScroll>
			</Box>
    )
}

export default AllTokens
