 import  { Container, Form, Title, TopBackground, ContainerInputs, InputLabel, Input, Button } from './styles'


import UsersImage from '../../assets/users.png'



 
function Home() {
  

  return (
    <Container>
      <TopBackground> 
        <img src={UsersImage} alt='image-usuarios' />
      </TopBackground>

      <Form>
      <Title>Cadastrar Usuários</Title>
     
     <ContainerInputs>
      <div>
        <div>
        <InputLabel>
        Nome<span>*</span>
        </InputLabel>
        <Input type="text" placeholder="Nome do usuário"/>
        </div>

        <div>
        <InputLabel>
        Idade<span>*</span>
        </InputLabel>
        <Input type="number" placeholder="Idade do usuário"  />
        </div>
       </div>

       <div>
        <InputLabel>
        E-mail<span>*</span>
        </InputLabel>   
      <Input type='email' placeholder='E-mail do usuário'/>
      </div>
      </ContainerInputs>

      <Button>Cadastrar Usuário</Button>
      </Form>
      </Container>
  )
}

export default Home
