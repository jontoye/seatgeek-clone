import React from "react";
import { usePagination } from "../hooks/usePagination";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton, Paper, Typography } from "@mui/material";

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '30px',
    marginBottom: '20px',
  },
  pageStatus: {
    padding: '0 15px'
  },
  pageBtn: {
    '&:hover': {
      color: (theme) => theme.primary
    }
  }
}

export const Pagination = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize
}) => {
  const paginationRange = usePagination({
    totalCount,
    pageSize
  });

  const next = () => {
    onPageChange(currentPage + 1);
  };

  const prev = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Paper sx={styles.container}>
      <IconButton sx={styles.pageBtn} disableRipple disabled={currentPage === 1} onClick={prev}>
        <ChevronLeftIcon sx={[
          (theme) => ({
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }),   
        ]}/>
      </IconButton>
      <Typography sx={styles.pageStatus} variant='subtitle' color='gray'>
        {currentPage} of {lastPage}
      </Typography>
      <IconButton sx={styles.focusBtn} disableRipple disabled={currentPage === lastPage} onClick={next}>
      <ChevronRightIcon sx={[
          (theme) => ({
            '&:hover': {
              color: theme.palette.primary.main,
            },
          }),   
        ]}/>
      </IconButton>
    </Paper>
  );
};
