import { useState } from "react";

export default function DeviceCompatibilityList() {
  const [search, setSearch] = useState("");

  const devices = {
    Apple: [
      "iPhone 7", "iPhone 7 Plus", "iPhone 8", "iPhone 8 Plus", "iPhone X",
      "iPhone XS", "iPhone XS Max", "iPhone XR", "iPhone SE (2020)", "iPhone 11",
      "iPhone 11 Pro", "iPhone 12", "iPhone 12 Mini", "iPhone 12 Pro", "iPhone 12 Pro Max",
      "iPhone 13", "iPhone 13 Mini", "iPhone 13 Pro", "iPhone 13 Pro Max"
    ],
    Samsung: [
      "Galaxy SIII", "Galaxy S4", "Galaxy S5", "Galaxy S6", "Galaxy S6 Edge", "Galaxy S6 Edge+",
      "Galaxy S7", "Galaxy S7 Edge", "Galaxy S8", "Galaxy S8+", "Galaxy S9", "Galaxy S9+", "Galaxy S10",
      "Galaxy S10 Plus", "Galaxy S20", "Galaxy S20 Plus", "Galaxy S20 Ultra", "Galaxy S21", "Galaxy S21 Plus",
      "Galaxy S21 Ultra", "Galaxy S20 FE", "Galaxy Note 3", "Galaxy Note 5", "Galaxy Note 10 Lite", "Galaxy Note 10 Plus",
      "Galaxy A32", "Galaxy A50s", "Galaxy A51", "Galaxy A52", "Galaxy A52s", "Galaxy A70", "Galaxy A72", "Galaxy A80",
      "Galaxy M32", "Galaxy M51", "Galaxy F62", "Galaxy Z Flip 3", "Galaxy Z Fold 3"
    ],
    OnePlus: [
      "OnePlus 3", "OnePlus 3T", "OnePlus 5", "OnePlus 5T", "OnePlus 6", "OnePlus 6T", "OnePlus 7", "OnePlus 7T",
      "OnePlus 7 Pro", "OnePlus 8", "OnePlus 8 Pro", "OnePlus 8T", "OnePlus Nord", "OnePlus 9", "OnePlus 9 Pro", "OnePlus 9R"
    ],
    Nokia: [
      "Nokia 3", "Nokia 3.1", "Nokia 4.2", "Nokia 5", "Nokia 5.1", "Nokia 6", "Nokia 6.1", "Nokia 7", "Nokia 7 Plus",
      "Nokia 8", "Nokia 8.1", "Nokia 9", "Nokia Lumia 920", "Nokia Lumia 930"
    ],
    LG: [
      "LG G3", "LG G4", "LG G5", "LG Nexus 5X", "LG V10", "LG V20", "LG V30", "LG V30 ThinQ", "LG V35 ThinQ",
      "LG V40 ThinQ", "LG G6", "LG Q6", "LG Q7", "LG G7 ThinQ", "LG Q8", "LG G8 ThinQ", "LG Wing"
    ],
    Xiaomi: [
      "Xiaomi Mi 11X", "Xiaomi Mi 11 Lite", "Xiaomi Mi 10T Pro", "Xiaomi Mi 10", "Xiaomi Mi 11T Pro", "Xiaomi Mi 11",
      "Xiaomi Redmi Note 10 Pro", "Xiaomi Redmi K40", "Xiaomi Mi Mix 4", "Xiaomi Mi 11 Ultra"
    ],
    Google: [
      "Google Pixel", "Google Pixel XL", "Google Pixel 2", "Google Pixel 2 XL", "Google Pixel 3", "Google Pixel 3 XL",
      "Google Pixel 3A", "Google Pixel 4A", "Google Nexus 4", "Google Nexus 5", "Google Nexus 5X", "Google Nexus 6P"
    ],
    Realme: [
      "Realme GT", "Realme Narzo 30", "Realme X7 Max", "Realme X7 Pro", "Realme X50 Pro", "Realme X2 Pro", "Realme GT Neo"
    ],
    Sony: [
      "Sony Xperia 10", "Sony Xperia 8 Lite", "Sony Xperia XA1", "Sony Xperia Z1", "Sony Xperia C5", "Sony Xperia XZ1",
      "Sony Xperia XA1 Dual", "Sony Xperia XA1 Ultra", "Sony Xperia T3", "Sony Xperia Z3", "Sony Xperia L2"
    ],
    Vivo: [
      "Vivo X70 Pro Plus", "Vivo X70 Pro", "Vivo X70", "Vivo Z6", "Vivo S10 Pro", "Vivo Nex 3S", "Vivo S9 5G"
    ],
    Honor: [
      "Honor 8", "Honor View 20", "Honor V10", "Honor 8 Pro"
    ],
    HTC: [
      "HTC One A9", "HTC Desire 20 Plus", "HTC U Ultra", "HTC 10 Evo", "HTC U11 Plus", "HTC Desire 10 Pro"
    ],
    Poco: [
      "Poco F2 Pro", "Poco F3", "Poco X3 GT"
    ],
    OPPO: [
      "OPPO Reno6", "OPPO Reno6 Pro", "OPPO Reno 4", "OPPO Reno 2", "OPPO Find X2", "OPPO R17 Pro", "OPPO Reno 3"
    ],
    Asus: [
      "Asus ROG Phone"
    ],
    Essential: [
      "Essential PH-1"
    ]
  };

  const filteredBrands = Object.entries(devices)
    .map(([brand, models]) => ({
      brand,
      models: models.filter(device => device.toLowerCase().includes(search))
    }))
    .filter(({ models }) => models.length > 0);

  return (
    <div style={{ maxWidth: '900px', margin: '60px auto', padding: '20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
        Is your device Tap Tap compatible?
      </h2>
      <div style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Enter your device name"
          style={{ width: '100%', maxWidth: '400px', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      {filteredBrands.length > 0 ? (
        filteredBrands.map(({ brand, models }) => (
          <div key={brand} style={{ background: '#D7D58C', padding: '20px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '14px' }}>{brand}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
              {models.map(device => (
                <span key={device} style={{ fontSize: '16px', color: '#444', background: '#fff', padding: '6px 10px', borderRadius: '6px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  {device}
                </span>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p style={{ fontSize: '16px', color: '#777' }}>No device found</p>
      )}
    </div>

  );
}