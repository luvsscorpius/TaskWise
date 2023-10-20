import React, { useState } from "react";
import { ListaDeTarefas } from "../components/ListaDeTarefas.jsx";
import { Box, Checkbox, Container, TextField, Typography } from "@mui/material";
import { FaTrash, FaEdit } from 'react-icons/fa'
import { grey } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Home = () => {
    const [tarefas, setTarefas] = useState([])

    const removerTarefa = (indice) => {
        // Precisamos criar um novo array com as novas tarefas e filtrar
        const novasTarefas = tarefas.filter((_, i) => i !== indice)
        setTarefas(novasTarefas)
    }

    return (
        <main>
            <ListaDeTarefas tarefas={tarefas} setTarefas={setTarefas} />
            <Container fixed sx={{ height: '50vh', borderRadius: '10px 10px 0px 0px', boxShadow: '10px 10px 10px 10px #ccc', backgroundColor: '#eee' }}>
                {tarefas.map((tarefa, index) => (
                    <Box sx={{ bgcolor: '#232058', height: '10vh' }} display='flex' alignItems='center' justifyContent='space-between' marginTop='10px' key={index} borderRadius='10px 10px'>
                        <Typography variant="h5" component="h2" sx={{ color: '#fff', width: '100%', display: 'flex', justifyContent: 'space-between', border: 'none', alignItems: 'center', margin: '10px' }}>
                            {/* <Typography sx={{ width: '300px', borderRadius: '10px', outline: 'none', border: 'none', backgroundColor: 'white', color: '#ddd' }} value={tarefa} disabled /> */}
                            <p>{tarefa}</p>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Checkbox {...label} sx={{ color: grey[50], '&.Mui-checked': { color: grey[50], }, marginTop: '5px' }} />
                                <FaEdit cursor='pointer' style={{ marginRight: '10px' }} /> <FaTrash cursor='pointer' onClick={() => removerTarefa(index)} style={{ marginRight: '10px' }} />
                            </Box>
                        </Typography>
                    </Box>
                ))}
            </Container>
        </main>
    )
}
