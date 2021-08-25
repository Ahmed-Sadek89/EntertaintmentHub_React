import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => {
    return{
        statusMSG:{
            textAlign:'center',
            fontSize:'30px'
        },
        Pagination: {
            margin:'20px 0px'
        },
        gen: {
            marginBottom: '20px'
        },
        up:{
            position: 'fixed',
            bottom: '82px',
            right: '10px',
            borderRadius: '100px',
            transition: 'all 0.5s ease-in-out',
            '&:hover': {
                backgroundColor:'rgb(63, 81, 181)'
            }
        }
    }
});

export const Address = styled(Typography)`
    text-align: center;
    text-transform: uppercase;
    padding:20px 0px;
    padding-top:0px;
`;
export const SetFlex = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0px;
`