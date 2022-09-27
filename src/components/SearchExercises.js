import React, { useState } from 'react'
import { Box, Typography, Button, Stack, TextField } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';

const SearchExercises = () => {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        if(search){
            //const exercisesData
        }
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: {
                            lg: '1170px',
                            xs: '350px',
                            backgroundColor: '#fffff',
                            borderRadius: '40px'
                        }
                    }}
                    height="76px"
                    value=""
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="search-btn" sx={{
                    bgcolor: '#FF2625', color: '#fff', textTransform: 'none',
                    width: { lg: '173px', xs: '80px' },
                    height: '56px', position: 'absolute', right: '0px',
                    fontSize: { lg: '20px', xs: '14px' }
                }} onClick={(e) => {handleSearch(e)}}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                {/* <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} /> */}
            </Box>
        </Stack>
    )
}

export default SearchExercises