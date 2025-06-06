import touristPanelClient from "utilsFolder/touristPanelClient";
global.tokenString = "";

export const getToken = async () => {
  try {
    let token = await touristPanelClient.post("/API/GenerateNewToken", {
      publicKey: process.env.NEXT_PUBLIC_2RIST_PUBLIC,
      privateKey: process.env.NEXT_PUBLIC_2RIST_PRIVATE,
    });

    if (token) {
      tokenString = token.data.authorization;
    } else return null;
  } catch (err) {
    console.log("err get token", err);
  }
};

export const ServicesDetailAsync = async (
  Page = 1,
  CityCode,
  StateCode,
  HasAtiveSans
) => {
  try {
    let data = "Page=" + Page;

    if (HasAtiveSans) data = data + "&HasAtiveSans=" + HasAtiveSans;

    if (StateCode) data = data + "&StateCode=" + StateCode;

    if (CityCode) data = data + "&StateCode=" + CityCode;

    await getToken();
    return touristPanelClient.get("/B2C/Booking/ServicesDetailAsync?" + data, {
      useCache: true,
    });
  } catch (e) {
    console.log("async", e);
  }
};

export const getAllServices = async () => {
  try {
    await getToken();
    return touristPanelClient.get("/B2C/Booking/GetAllServicesAsync");
  } catch (e) {
    console.log("async", e);
  }
};

export const getService = async (ServiceUniqueId) => {
  try {
    await getToken();
    return touristPanelClient.get(
      "/B2C/Booking/GetServiceAsync?ServiceUniqueId=" + ServiceUniqueId
    );
  } catch (e) {
    console.log("async", e);
  }
};

export const getSansService = async (
  ServiceUniqueId,
  LicenseUniqueId,
  TicketTypeUniqueIds = null
) => {
  let query = "";
  if (ServiceUniqueId) query = query + "ServiceUniqueId=" + ServiceUniqueId;

  if (LicenseUniqueId) query = query + "&LicenseUniqueId=" + LicenseUniqueId;

  if (TicketTypeUniqueIds)
    query = query + "TicketTypeUniqueIds=" + TicketTypeUniqueIds;

  await getToken();
  return touristPanelClient.get("/B2C/Booking/GetAvailableSansAsync?" + query);
};

export const getCheckItemAvalibality = async (
  TicketTypeUniqueId,
  SansUniqueId,
  LicenseUniqueId,
  Number
) => {
  await getToken();

  const query =
    "TicketTypeUniqueId=" +
    TicketTypeUniqueId +
    "&SansUniqueId=" +
    SansUniqueId +
    "&LicenseUniqueId=" +
    LicenseUniqueId +
    "&Number=" +
    Number;

  console.log(query);
  return touristPanelClient.get(
    "/B2C/Booking/CheckItemAvailabilityAsync?" + query
  );
};

export const setTempBooking = async (
  fullName,
  mobilePhone,
  invoiceNo,
  licenseUniqueId,
  sansUniqueId,
  ticketTypeUniqueId,
  number
) => {
  try {
    const data = {
      fullName: fullName,
      mobilePhone: mobilePhone,
      internalInvoiceNumber: invoiceNo,
      bookItems: [
        {
          licenseUniqueId: licenseUniqueId,
          sansUniqueId: sansUniqueId,
          ticketTypeUniqueId: ticketTypeUniqueId,
          number: number,
          // manifest: [
          //   {
          //     fullName: "<string>",
          //     uniqueNumber: "<string>",
          //     uniqueNumberType: "<integer>",
          //   },
          //   {
          //     fullName: "<string>",
          //     uniqueNumber: "<string>",
          //     uniqueNumberType: "<integer>",
          //   },
          // ],
        },
      ],
    };

    console.log(data);
    await getToken();
    return touristPanelClient.post("/B2C/Booking/TempBookingAsync", data);
  } catch (e) {
    console.log(e);
  }
};

export const setFinalizeTemp = async (
  TempBookingReference,
  DiscountAmount,
  SendSMS
) => {
  await getToken();

  const query =
    "TempBookingReference=" +
    TempBookingReference +
    "&DiscountAmount=" +
    DiscountAmount +
    "&SendSMS=" +
    SendSMS;

  return touristPanelClient.get("/B2C/Booking/FinalizingBookingAsync?" + query);
};
