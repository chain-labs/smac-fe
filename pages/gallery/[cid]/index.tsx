import { useRouter } from 'next/dist/client/router';
import React from 'react'
// import Box from 'src/components/Box'
// import GalleryPageComp from 'src/containers/gallery'
import GalleryPageComp from 'src/containers/gallery';

const GalleryPage = () => {
    const router = useRouter();
  const { cid } = router.query;
    return (
        <React.Fragment>
        {
            cid? <GalleryPageComp cid={cid?.toString()} /> : ""
        }
        </React.Fragment>
    )
}

export default GalleryPage
