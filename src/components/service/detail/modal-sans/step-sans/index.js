import React from "react";
import { formatNumber, latinToPersian } from "utilsFolder/lastinToPersian";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import ReactModal from "components/react-modal/ReactModal";
import { ErrorToast } from "hoc/ToastNotify/ToastNotify";
import Wrapper from "hoc/Wrapper/Wrapper";

class StepSans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      number: 1,
    };

    this.changeNumber = this.changeNumber.bind(this);
  }

  changeNumber(status, tt) {
    const { number } = this.state;
    const num = status === "up" ? number + 1 : number - 1;
    if (num > parseInt(tt.remaining)) {
      ErrorToast("بیش از حداکثر ظرفیت");
    } else if (num < 1) {
      ErrorToast("حداقل یک بلیط انتخاب کنید");
    } else {
      this.setState({
        number: num,
      });
    }
  }

  render() {
    const { sans, jm } = this.props;
    return (
      <div>
        {sans.label ? (
          <span className={"text-bold"}>
            {sans.label}
            <br />
            <br />
          </span>
        ) : (
          ""
        )}
        برای
        {"  "}
        <strong>{latinToPersian(jm.format("ddd LL"))}</strong> از ساعت{"  "}
        <strong>{latinToPersian(sans.start)}</strong> تا{"  "}
        <strong>{latinToPersian(sans.end)}</strong> <br />
        <br />
        دارای ظرفیت
        {latinToPersian(sans.remainingCapacity)}
        <br />
        <br />
        برای خرید و انتخاب تعداد بر روی باکس های زیر کلیک کنید.
        <div className={"mt-3"}>
          {sans.ticketTypes.map((tt) => {
            const selected =
              tt.ticketTypeUniqueId === this.state.selected?.ticketTypeUniqueId;
            const priceFInal =
              tt.priceAfterDiscount !== tt.price
                ? tt.priceAfterDiscount
                : tt.price;
            return (
              <ListGroup
                as={"ul"}
                className={
                  "mb-2 row-type-ticket " + (selected ? " selected" : "")
                }
              >
                <ListGroup.Item
                  as={"li"}
                  onClick={(e) => {
                    this.setState({
                      selected: tt,
                      number: 1,
                    });
                  }}
                >
                  <div className={"d-flex justify-content-between"}>
                    <div>{tt.title}</div>
                    <div>موجود : {latinToPersian(tt.remaining)} عدد</div>
                    <div>
                      {tt.priceAfterDiscount !== tt.price ? (
                        <span>
                          <span>
                            {latinToPersian(
                              formatNumber(tt.priceAfterDiscount)
                            )}
                          </span>
                          <span className={"price-main"}>
                            {latinToPersian(formatNumber(tt.price))}
                          </span>

                          <span className={"rial"}>ریال</span>
                        </span>
                      ) : (
                        <span>
                          {latinToPersian(formatNumber(tt.price))}
                          <span className={"rial"}>ریال</span>
                        </span>
                      )}
                    </div>
                  </div>
                </ListGroup.Item>
                {selected ? (
                  <Wrapper>
                    <ListGroup.Item>
                      <div className={"d-flex justify-content-between"}>
                        <div className={"d-flex"}>
                          <div className={"pl-2"}>تعداد : </div>
                          <Button
                            variant={"outline-dark"}
                            size={"sm"}
                            className={"ml-2"}
                            onClick={(e) => {
                              this.changeNumber("up", tt);
                            }}
                          >
                            +
                          </Button>
                          <div>{latinToPersian(this.state.number)}</div>
                          <Button
                            variant={"outline-dark"}
                            size={"sm"}
                            className={"mr-2"}
                            onClick={(e) => {
                              this.changeNumber("down", tt);
                            }}
                          >
                            -
                          </Button>
                        </div>
                        <div className={"d-flex"}>
                          <div>قیمت کل </div>
                          <div>
                            {latinToPersian(
                              formatNumber(priceFInal * this.state.number)
                            )}
                            <span className={"rial"}>ریال</span>
                          </div>
                        </div>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <div>
                        <Button
                          variant={"success"}
                          block={true}
                          onClick={(e) => {
                            this.props.selectTicketType(tt, this.state.number);
                          }}
                        >
                          خرید
                        </Button>
                      </div>
                    </ListGroup.Item>
                  </Wrapper>
                ) : (
                  ""
                )}
              </ListGroup>
            );
          })}
        </div>
      </div>
    );
  }
}

export default StepSans;
