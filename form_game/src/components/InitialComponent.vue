<template>
    <div>
        <div class="header">
            <div class="avatar">
                <img src="../assets/avatar-ella.png" alt="Avatar" class="header-avatar"> 
                Ella
            </div>
            <img src="../assets/juntos_logo_header.png" alt="Logo" class="header-logo">
            <div></div>
        </div>
        <div class="">
            <RouterLink to="/formularios">
                <button class="green-button">Questionário</button>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.header{
    background-color: #60C3B4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    border-radius: 0px 0px 8px 8px;
    width: 100%;
}

.header-avatar {
    border-radius: 50%;
    width: 50px;
    height: auto;
}

.header-logo {
    max-width: 120px;
}

.avatar{
    color: #000;
}

.green-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 16px 24px 16px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
}
    
</style>