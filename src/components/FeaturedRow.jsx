import { Box, Card, CardHeader, CardMedia, Stack, Typography, Skeleton } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { Pagination } from './Pagination'
import { keyframes } from '@mui/system';

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const styles = {
  row: {
    overflow: 'hidden'
  },
  card: {
    maxWidth: '350px',
    marginRight: '15px',
    borderRadius: '15px',
    position: 'relative',
  },
  cardImg: {
    '& .MuiCardMedia-img': {

    }
  },
  cardTitle: {
    position: 'absolute',
    color: 'white',
    bottom: 10,
    left: 15
  }
}

const CardSkeleton = ({ cardsToRender }) => {
  return (
    <>
      {Array(cardsToRender)
        .fill(1)
        .map((card, index) => (
          <Skeleton sx={[styles.card]} key={index}>
            <Card>.</Card>
          </Skeleton>
        ))}
    </>
  )
}

const FeaturedRow = ({ title, categories, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const CARDS_PER_PAGE = 4;

  const currentCardsShowing = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const lastPageIndex = firstPageIndex + CARDS_PER_PAGE;
    return categories.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, categories])

  console.log(categories)

  return (
    <Box>
      <Box 
        display='flex' 
        justifyContent='space-between' 
        alignItems='center'
      >
        <Typography variant='h6'>{title}</Typography>
        <Pagination 
          totalCount={categories.length}
          currentPage={currentPage}
          pageSize={CARDS_PER_PAGE}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Box>

      <Stack sx={{ animation: `${slide} 1s ease`}} direction='row'>
        {
          loading ? (
            <CardSkeleton cardsToRender={4} />
          ) : (
            currentCardsShowing.map(cat => (
              <Card key={cat.id} sx={[styles.card]}>
                <CardMedia
                  component='img'
                  image={cat.image}
                  alt={cat.name}
                  sx={[styles.cardImg]}
                />
                <Typography variant="subtitle" sx={styles.cardTitle}>{cat.name}</Typography>
              </Card>
            ))
          )
        }

      </Stack>

        

    </Box>
  )
}

export default FeaturedRow