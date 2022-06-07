import { Box, Card, CardContent, CardMedia, Stack, Typography, Skeleton } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Pagination } from './Pagination';
import { keyframes } from '@mui/system';
import moment from 'moment';

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
    width: '350px',
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

const FeaturedRow = ({ title, items, loading, type }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const CARDS_PER_PAGE = 4;

  const currentCardsShowing = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const lastPageIndex = firstPageIndex + CARDS_PER_PAGE;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, items])

  return (
    <Box sx={{ marginBottom: '50px' }}>
      <Box 
        display='flex' 
        justifyContent='space-between' 
        alignItems='center'
      >
        <Typography variant='h6'>{title}</Typography>
        <Pagination 
          totalCount={items.length}
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
            currentCardsShowing.map(item => (
              <Card key={item.id} sx={[styles.card]}>
                <CardMedia
                  component='img'
                  height="200px"
                  image={type === 'categories' ? item.image : item.performers[0].image}
                  alt={type === 'categories' ? item.name : item.short_title}
                  sx={[styles.cardImg]}
                />
                {type === 'categories' ? (
                  <Typography variant="subtitle" sx={styles.cardTitle}>{item.name}</Typography>
                ):
                  (
                    <CardContent>
                      <Typography><strong>{item.short_title}</strong></Typography>
                      <Typography color="gray">{moment(item.datetime_local).format('MMM D')} • {item.venue.name}</Typography>
                      <Typography>From ${item.stats.lowest_price}</Typography>
                    </CardContent>
                  )
                }
              </Card>
            ))
          )
        }

      </Stack>

        

    </Box>
  )
}

export default FeaturedRow