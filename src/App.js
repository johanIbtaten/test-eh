import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
    <div class="row  mt-5">
      <div class="col-4 offset-2">
        <h2> UserList</h2>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">Joe</a>

          <a href="#" class="list-group-item list-group-item-action active">This is a primary list group item</a>
          <a href="#" class="list-group-item list-group-item-action">This is a secondary list group item</a>
          <a href="#" class="list-group-item list-group-item-action">This is a success list group item</a>
        </div>
        </div>
    

    <div class="col-4">
      <h2>Joe</h2>
      <hr />
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" />
        </div>
        
        <div class="form-group">
          <div class="mb-2">Droits</div>
        
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="videoCheck" />
              <label class="form-check-label" for="videoCheck">
                vidéo
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="audioCheck" />
              <label class="form-check-label" for="audioCheck">
                audio
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="textCheck" />
              <label class="form-check-label" for="textCheck">
                text
              </label>
            </div>
          </div>
      
        <hr />
        <button class="btn btn-primary" type="submit">Save</button>

      </form>
    </div>


    </div>
    </div>


  );
}

export default App;
