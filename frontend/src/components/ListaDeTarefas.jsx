import React, { useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const ListaDeTarefas = ({ tarefas, setTarefas }) => {
    const inputRef = useRef()

    const adicionarTarefas = () => {
        // Para acessar o valor de um input, você deve fazê-lo no manipulador de eventos do botão
        const novaTarefa = inputRef.current.value;

        if (novaTarefa.trim() === '') {
            toast.warn("Informe uma tarefa antes de prosseguir");
        } else {
            setTarefas([...tarefas, novaTarefa]);
        }

        inputRef.current.value = '';


        console.log(novaTarefa);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <React.Fragment>
                <CssBaseline />
                <Container fixed sx={{ height: '10px' }}>
                    <Box sx={{ bgcolor: '#232058', height: '30vh', boxShadow: '10px 10px 10px 10px #ccc' }} display='flex' alignItems='center' justifyContent='center' marginTop='50px' borderRadius='10px 10px 0px 0px' gap='10px'>
                        <TextField inputRef={inputRef} sx={{ backgroundColor: 'white', width: '300px', borderRadius: '10px', height: '55px' }} placeholder='Escreva o que você quer fazer' />
                        <Button variant="contained" size="large" sx={{ backgroundColor: '#706DB8', height: '55px' }} onClick={adicionarTarefas}>Criar Tarefa</Button>
                    </Box>
                </Container>
                <Container sx={{ marginTop: '37vh', borderRadius: '10px 10px 0px 0px' }}>
                    <Box sx={{ height: '10vh', margin: 'auto 0' }} display='flex' alignItems='center' justifyContent='center' marginTop='30%' >
                        <Typography variant="h5" nent="h2" sx={{ color: '#232058', }}>
                            LISTA DE TAREFAS A FAZER:
                        </Typography>
                    </Box>
                </Container>
            </React.Fragment>
        </div >
    );
}
