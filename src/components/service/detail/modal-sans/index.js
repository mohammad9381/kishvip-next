import React from "react";
import ReactModal from "components/react-modal/ReactModal";
import jmoment from "moment-jalaali";
import StepSans from "components/service/detail/modal-sans/step-sans";
import StepCellphone from "components/service/detail/modal-sans/step-cellphone";
import StepInvoice from "components/service/detail/modal-sans/step-invoice";
import StepPayment from "components/service/detail/modal-sans/step-pay";

class ServiceDetailModalSans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      selectTicketType: null,
      number: 0,
      user: null,
      name: null,
      invoice: null,
    };

    this.changeStep = this.changeStep.bind(this);
    this.selectTicketType = this.selectTicketType.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.selectInvoice = this.selectInvoice.bind(this);
  }

  changeStep(num) {
    this.setState({
      step: num,
    });
  }

  selectTicketType(data, number) {
    this.setState({
      selectTicketType: data,
      step: 1,
      number: number,
    });
  }

  selectUser(user, name) {
    this.setState({
      user: user,
      step: 2,
      name: name,
    });
  }

  selectInvoice(invoice) {
    this.setState({
      invoice,
      step: 3,
    });
  }

  render() {
    const { step } = this.state;
    const { data, closeModal, show, sans } = this.props;
    const jm = sans ? jmoment(sans.date, "jYYYY/jM/jD") : "";

    return (
      <div>
        {sans ? (
          <ReactModal
            titleClose={null}
            titleSave={null}
            title={"رزرو " + data.title}
            show={show}
            closeModal={closeModal}
          >
            {step === 0 ? (
              <StepSans
                jm={jm}
                sans={sans}
                selectTicketType={this.selectTicketType}
              />
            ) : step === 1 ? (
              <StepCellphone
                sans={sans}
                jm={jm}
                selectTicketType={this.state.selectTicketType}
                number={this.state.number}
                selectUser={this.selectUser}
              />
            ) : step === 2 ? (
              <StepInvoice
                sans={sans}
                jm={jm}
                selectTicketType={this.state.selectTicketType}
                number={this.state.number}
                user={this.state.user}
                name={this.state.name}
                data={data}
                selectInvoice={this.selectInvoice}
              />
            ) : step === 3 ? (
              <StepPayment data={data} invoice={this.state.invoice} />
            ) : (
              <div>نامشخص</div>
            )}
          </ReactModal>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ServiceDetailModalSans;
