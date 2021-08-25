// material-ui
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// components
import { fetchTrending } from '../../Components/API/API';
import ContentTag from '../../Components/ContentTag/ContentTag';
import CustomPagination from '../../Components/CustomPagination/CustomPagination';
// tools
import { useQuery } from "react-query";
import { useState } from 'react';
// styles
import {Address} from './Styles';
import {useStyles} from './Styles'


const Trendings = (props) => {
  const classes = useStyles()
  console.log(props.match)
  const [page, setPage] = useState(1);
  const {data, status} = useQuery(['fetchTrending', page],() => fetchTrending(page),
  {
  keepPreviousData: true,
  cacheTime: 300 // time to get fetching
  })
  
  console.log(data)
  
  console.log('page now is ', page)
    return (
      <Container>
        <Address variant='h4'>
          trending today
        </Address>
        
        {
          status === 'loading' && 
          <Typography variant='h2'  className={classes.statusMSG}>
            loading...,Refresh the page if necessary.
          </Typography>
        }
        {
          status === 'success' &&          
          <Container>

            <Grid container spacing={3}>
            {
              data.results.map( (index) =>{
                return(
                  <ContentTag key={index.id} type={index.media_type} result={index}  />
                )
              })
            }
            </Grid>

            {/*  set button up */}
            <Button
             color='secondary'
             variant='contained'
             className={classes.up}
             onClick={() => window.scroll(0,0)}
             >
                Up
            </Button>
            {/*  set button up */}

            {/*  set pagination */}
            {
              data.total_pages > 0 && 
              <CustomPagination count={data.total_pages} page={page} setPage={setPage} />
            }
            {/*  set pagination */}

          </Container>
          
        }
      </Container>
    );
  }
  
  export default Trendings;
  