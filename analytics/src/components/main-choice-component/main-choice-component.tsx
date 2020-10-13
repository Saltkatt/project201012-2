import {Component, Host, h, State} from '@stencil/core';

@Component({
  tag: 'main-choice-component',
  styleUrl: 'main-choice-component.css',
  shadow: true,
})
export class MainChoiceComponent {

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
  ]

  @State() selectedChoice = this.choices[0]
  @State() selectedName = this.selectedChoice.name[0]
  @State() selectedValue = this.selectedChoice.value[0]


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


  questionContent(){
    return (
      <div>
        <ion-card>
          <ion-title>
            Main Choices
          </ion-title>

        </ion-card>

      </div>
    )
  }

  render() {
    return (
      <Host>
        <div>
          {this.questionContent()}
        </div>
      </Host>
    );
  }

}
