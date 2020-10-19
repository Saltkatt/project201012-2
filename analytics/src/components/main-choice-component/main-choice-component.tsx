import {Component, Host, h, State} from '@stencil/core';

@Component({
  tag: 'main-choice-component',
  styleUrl: 'main-choice-component.css',
  shadow: true,
})
export class MainChoiceComponent {

  @State() backgroundColor: string = 'white';

  choices = [
    {
      name: "choice1",
      value: 10
    },
    {
      name: "choice2",
      value: 5
    },
    {
      name: "choice3",
      value: 8
    }
    ,
    {
      name: "choice4",
      value: 3
    },
    {
      name: "choice5",
      value: 9
    },
    {
      name: "choice6",
      value: 11
    }
  ]

  @State() selectedChoice = this.choices[0]
  @State() selectedName = this.selectedChoice.name[0]
  @State() selectedValue = this.selectedChoice.value[0]
  @State() renderChoice = "choice1"


  getChoiceComponent(){
    let choiceName = this.selectedName
    let choiceValue = this.selectedValue
    console.log("selected name", choiceName)
    console.log("selected value", choiceValue)

    if (this.selectedName === "choice1"){
      return(
        <div>
          <p>Choice 1 has been chosen</p>
        </div>
      )
    }
    if (this.selectedName === "choice2"){
      return(
        <div>
          <p>Choice 2 has been chosen</p>
        </div>
      )
    }
    if (this.selectedName === "choice3"){
      return(
        <div>
          <p>Choice 3 has been chosen</p>
        </div>
      )
    }
  }

  getChosenItem(){
    console.log("getChosenItem check colour")
    this.backgroundColor = '#3dc2ff';

  }

  renderToolBarChoice(){
    if(this.renderChoice == "choice1"){
      return(
        <ion-header>
          <ion-toolbar>
            <ion-button class="choice1-button" style={{'--background': "#4bacda"}}
                        onClick={() => this.renderChoice = "choice1"}>First Choice
            </ion-button>
            <ion-button class="choice2-button"
                        onClick={() => this.renderChoice = "choice2"}>Second Choice
            </ion-button>
          </ion-toolbar>
        </ion-header>
      )
    }
    else if (this.renderChoice == "choice2"){
      return(
        <ion-header>
          <ion-toolbar>
            <ion-button class="choice1-button"
                        onClick={() => this.renderChoice = "choice1"}>First Choice
            </ion-button>
            <ion-button class="choice2-button" style={{'--background': "#4bacda"}}
                        onClick={() => this.renderChoice = "choice2"}>Second Choice
            </ion-button>
          </ion-toolbar>
        </ion-header>
        )
    }
  }


  questionContent(){
    return (
      <div>
        <ion-card>
          <ion-title>
            Main Choices
          </ion-title>
          <ion-list class="choice-list">
          {this.choices.map((choice)=>{
            console.log("Choice: ", choice);
            return(

              <ion-item>
                <ion-card class="choice-card" style={{background: this.backgroundColor}}
                          onClick={() => this.getChosenItem()}>
                <ion-label>{choice.name}</ion-label>
                </ion-card>
              </ion-item>

            )
          })}
          </ion-list>
        </ion-card>
      </div>
    )
  }

  render() {
    return (
      <Host>
        <div>
          {this.renderToolBarChoice()}
          {this.questionContent()}
        </div>
      </Host>
    );
  }

}
