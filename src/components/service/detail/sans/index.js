import React from "react";
import {
  Button,
  Card,
  Col,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { latinToPersian } from "utilsFolder/lastinToPersian";
import jmoment from "moment-jalaali";
import ServiceDetailSansBox from "components/service/detail/sans/sans-box";
import Wrapper from "hoc/Wrapper/Wrapper";
import ReactModal from "components/react-modal/ReactModal";
import ServiceDetailModalSans from "components/service/detail/modal-sans";

class ServiceDetailSans extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sans: [],
      loading: true,
      selectSans: null,
      modalOpen: false,
    };

    this.getSans = this.getSans.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    console.log(this.props.data);
    const { serviceUniqueId, licences } = this.props.data;
    this.getSans(serviceUniqueId, licences);
  }

  async getSans(serviceUniqueId, licences) {
    fetch(
      "/api/serviceSans?id=" +
        serviceUniqueId +
        "&licence=" +
        licences[0].licenceUniqueId
    )
      .then(async (res) => {
        let dd = await res.json();
        this.setState({
          sans: dd.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
        });
      });
  }

  showModal(data) {
    console.log(data);
    this.setState({
      selectSans: data,
      modalOpen: true,
    });
  }
  closeModal() {
    this.setState({
      selectSans: null,
      modalOpen: false,
    });
  }

  render() {
    const { data } = this.props;
    const { sans, loading } = this.state;
    jmoment.loadPersian({ dialect: "persian-modern" });

    const dateSelct = [];
    return (
      <div>
        {loading ? (
          "Loading"
        ) : sans ? (
          <div className={"sans-main"}>
            <Row>
              {sans.map((s) => {
                const jm = jmoment(s.date, "jYYYY/jM/jD");

                const compo = (
                  <ServiceDetailSansBox showModal={this.showModal} s={s} />
                );

                if (dateSelct.find((dateList) => dateList === s.date)) {
                  return compo;
                } else {
                  dateSelct.push(s.date);

                  return (
                    <Wrapper>
                      {dateSelct.length > 1 ? (
                        <Col md={12}>
                          <hr />
                        </Col>
                      ) : (
                        ""
                      )}
                      <Col md={12} className={"mt-4 mb-1"}>
                        {" "}
                        {latinToPersian(jm.format("ddd LL "))}
                      </Col>
                      {compo}
                    </Wrapper>
                  );
                }
              })}
            </Row>
          </div>
        ) : (
          <div>متاسفانه سانسی برای رزرو موجود نیست.</div>
        )}
        {this.state.modalOpen ? (
          <ServiceDetailModalSans
            data={data}
            sans={this.state.selectSans}
            show={this.state.modalOpen}
            closeModal={this.closeModal}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ServiceDetailSans;
