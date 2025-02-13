import { useState } from "react";

export default function DeviceCompatibilityList() {
  const [search, setSearch] = useState("");

  const devices = {
    Apple: [
      "iPhone 7", "iPhone 7 Plus", "iPhone 8", "iPhone 8 Plus", "iPhone X",
      "iPhone XS", "iPhone XS Max", "iPhone XR", "iPhone SE", "iPhone 11",
      "iPhone 11 Pro", "iPhone 12", "iPhone 12 Mini", "iPhone 13", "iPhone 13 Mini",
      "iPhone 13 Pro", "iPhone 13 Pro Max", "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro"
    ],
    Samsung: [
      "Galaxy S20", "Galaxy S21", "Galaxy S22", "Galaxy S23", "Galaxy Note 10",
      "Galaxy Note 20", "Galaxy Z Flip", "Galaxy Z Fold 2", "Galaxy A52", "Galaxy A72"
    ]
  };

  return (
    <div style={{ maxWidth: '800px', margin: '60px auto', padding: '20px', textAlign: 'center' }}>
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
      <div>
        {Object.entries(devices).map(([brand, models]) => {
          const filteredModels = models.filter(device => device.toLowerCase().includes(search));
          return (
            <div key={brand} style={{ background: '#D7D58C', padding: '20px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '14px', color: '' }}>{brand}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
                {filteredModels.length ? (
                  filteredModels.map(device => (
                    <span key={device} style={{ fontSize: '16px', color: '#444', background: '#fff', padding: '6px 10px', borderRadius: '6px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>{device}</span>
                  ))
                ) : (
                  <p style={{ fontSize: '16px', color: '#777', gridColumn: 'span 3' }}>No matching devices found</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}