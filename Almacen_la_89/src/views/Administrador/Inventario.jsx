import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Input, Label} from 'reactstrap';

const data = [
    { id: 1, personaje: "Naruto", anime: "Naruto"},
    { id: 2, personaje: "Lufy", anime: "One piece"},
    { id: 3, personaje: "Madara", anime: "Naruto"},
    { id: 4, personaje: "Goku", anime: "Dragon ball"},
    { id: 5, personaje: "Saintama", anime: "One punch-man"},
    { id: 6, personaje: "Sakura", anime: "Naruto"},
];

class Inventario extends React.Component{
    state={
        data: data,
        form:{
            id: '',
            personaje: '',
            anime: '',
        },
        modalInsertar: false,
        modalEditar: false,

    }
        
    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    };

    mostrarModalInsertar=()=>{
        this.setState({modalInsertar: true});
    }
    ocultarModalInsertar=()=>{
        this.setState({modalInsertar: false});
    }

    mostrarModalEditar=(registro)=>{
        this.setState({modalEditar: true, form: registro});
    }
    ocultarModalEditar=()=>{
        this.setState({modalEditar: false})
    }

    insertar=()=>{
        var valorNuevo={...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista=this.state.data;
        lista.push(valorNuevo)
        this.setState({data: lista, modalInsertar: false});
    }

    editar=(dato)=>{
        var contador=0;
        var lista=this.state.data;
        lista.map((registro)=>{
            if(dato.id==registro.id){
                lista[contador].personaje=dato.personaje;
                lista[contador].anime=dato.anime;
            }
            contador++;
        });
        this.setState({data: lista, modalEditar: false});
    }

    eliminar=(dato)=>{
        var opcion=window.confirm("Realmente desea eliminar el registro "+dato.id);
        if(opcion){
            var contador=0;
            var lista = this.state.data;
            lista.map((registro)=>{
                if(registro.id == dato.id){
                    lista.splice(contador, 1);
                }
                contador++;
            })
            this.setState({data: lista});
        }
    }

        render(){
            return(
                <>
                <Container>
                <Button color='success' onClick={()=>this.mostrarModalInsertar()} >Agregar Nuevo Producto</Button>
                <br /><br />

                <Table>
                    <thead><tr><th>ID</th>
                    <th>Personaje</th>
                    <th>Anime</th>
                    <th>Acciones</th>
                    </tr></thead>

                    <tbody>
                        {this.state.data.map((elemento)=>(
                            <tr>
                                <td>{elemento.id}</td>
                                <td>{elemento.personaje}</td>
                                <td>{elemento.anime}</td>
                                <td><Button color='primary' onClick={()=>this.mostrarModalEditar(elemento)} >Editar</Button>{"  "}
                                <Button color='danger' onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>



                </Container>
                
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Registro</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label htmlFor="">Id:</label>
                            <Input className="form-control" readOnly type='number' value={this.state.data.length + 1}></Input>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="">Personaje:</label>
                            <Input className="form-control" name='personaje' type='text' onChange={this.handleChange}></Input>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="">Anime:</label>
                            <Input className="form-control" name='anime' type='text' onChange={this.handleChange}></Input>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color='primary' onClick={()=>this.insertar()}>Insertar</Button>
                        <Button color='danger' onClick={()=>this.ocultarModalInsertar()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>
                        <div><h3>Editar Registro</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label htmlFor="">Id:</label>
                            <Input className="form-control" readOnly type='number' value={this.state.form.id}></Input>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="">Personaje:</label>
                            <Input className="form-control" name='personaje' type='text' onChange={this.handleChange} value={this.state.form.personaje}></Input>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="">Anime:</label>
                            <Input className="form-control" name='anime' type='text' onChange={this.handleChange} value={this.state.form.anime}></Input>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color='primary' onClick={()=>this.editar(this.state.form)}>Editar</Button>
                        <Button color='danger' onClick={()=>this.ocultarModalEditar()} >Cancelar</Button>
                    </ModalFooter>
                </Modal>

                
                </>
            )
        }
}

export default Inventario;