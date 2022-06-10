import {CompaniesStateType} from "../types/reducers-types/companiesReducerTypes";
import {
    changeStatusPreloaderAC,
    companiesReducer,
    deletePhotoAC,
    editNameInfoBlockAC,
    savePhotoSuccessAC,
    setCompaniesAC
} from "./companies-reducer";

const FIRST_ELEMENT_IN_ARRAY = 0

let startState: CompaniesStateType = {
    id: "",
    contactId: "",
    name: "",
    shortName: "",
    businessEntity: "",
    contract: {
        no: "",
        issue_date: ""
    },
    type: [],
    status: "",
    createdAt: "",
    updatedAt: "",
    photosData: [
        {
            "name": "Photo.png",
            "filepath": "http://135.181.35.61:2112/Photo.png",
            "thumbpath": "http://135.181.35.61:2112/Photo.png"
        }

    ],
    infoBlockName: "Хорошо",
    isEnablePreloader: false,
}

beforeEach(() => {
    startState = {
        id: "",
        contactId: "",
        name: "",
        shortName: "",
        businessEntity: "",
        contract: {
            no: "",
            issue_date: "",
        },
        type: [],
        status: "",
        createdAt: "",
        updatedAt: "",
        photosData: [],
        infoBlockName: "Перспективные захоронения",
        isEnablePreloader: false,
    }
})

test('the companies data must be set correctly', () => {
    const newCompaniesResponse = {
        id: "14",
        contactId: "15",
        name: "ООО «Надежда»",
        shortName: "Надежда",
        businessEntity: "ООО",
        contract: {
            no: "8",
            issue_date: "2011-03-12T00:00:00Z",
        },
        type: ["cool firm"],
        status: "active",
        createdAt: "2020-11-21T08:03:00Z",
        updatedAt: "2021-11-21T08:03:00Z",
        photos: [
            {
                "name": "0b8fc462dcabf7610a91.png",
                "filepath": "http://135.181.35.61:2112/0b8fc462dcabf7610a91.png",
                "thumbpath": "http://135.181.35.61:2112/0b8fc462dcabf7610a91_160x160.png"
            }
        ],
    }

    const endState = companiesReducer(startState, setCompaniesAC(newCompaniesResponse))

    expect(endState.id).toBe("14");
    expect(endState.contactId).toBe("15");
    expect(endState.name).toBe("ООО «Надежда»");
    expect(endState.shortName).toBe("Надежда");
    expect(endState.businessEntity).toBe("ООО");
    expect(Object.keys(endState.contract).length).toBe(2);
    expect(endState.contract.no).toBe("8");
    expect(endState.contract.issue_date).toBe("2011-03-12T00:00:00Z");
    expect(endState.type[FIRST_ELEMENT_IN_ARRAY]).toBe("cool firm");
    expect(endState.status).toBe("active");
    expect(endState.createdAt).toBe("2020-11-21T08:03:00Z");
    expect(endState.updatedAt).toBe("2021-11-21T08:03:00Z");
    expect(endState.photosData.length).toBe(1);
    expect(endState.photosData[FIRST_ELEMENT_IN_ARRAY].name).toBe("0b8fc462dcabf7610a91.png");
});
test('photo should be added', () => {
    const newPhotoData = {
        "name": "0b8fc462dcabf7610a91.png",
        "filepath": "http://135.181.35.61:2112/0b8fc462dcabf7610a91.png",
        "thumbpath": "http://135.181.35.61:2112/0b8fc462dcabf7610a91_160x160.png"
    }

    const endState = companiesReducer(startState, savePhotoSuccessAC(newPhotoData))

    expect(endState.photosData.length).toBe(1);
    expect(endState.photosData[FIRST_ELEMENT_IN_ARRAY].name).toBe("0b8fc462dcabf7610a91.png");
});
test('photo should be deleted', () => {
    const deletePhotosName = "Photo.png"

    const endState = companiesReducer(startState, deletePhotoAC(deletePhotosName))

    expect(endState.photosData.length).toBe(0);
});
test('the name of the block must be changed', () => {
    const deletePhotosName = "Отлично"

    const endState = companiesReducer(startState, editNameInfoBlockAC(deletePhotosName))

    expect(endState.infoBlockName).toBe("Отлично");
});
test('the status of the preloader must be changed', () => {
    const newStatus = true

    const endState = companiesReducer(startState, changeStatusPreloaderAC(newStatus))

    expect(endState.isEnablePreloader).toBe(true);
});




