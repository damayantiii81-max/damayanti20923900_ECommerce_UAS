let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

function tambahKeranjang(nama, harga) {
  keranjang.push({ nama, harga });
  localStorage.setItem("keranjang", JSON.stringify(keranjang));
  alert(nama + " berhasil ditambahkan!");
}

function loadKeranjang() {
  let tbody = document.querySelector("#keranjang tbody");
  let total = 0;
  tbody.innerHTML = "";
  keranjang.forEach(item => {
    let row = `<tr><td>${item.nama}</td><td>Rp ${item.harga}</td></tr>`;
    tbody.innerHTML += row;
    total += item.harga;
  });
  document.getElementById("total").innerText = total;
}

function checkout() {
  if (keranjang.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }
  alert("Checkout berhasil! Terima kasih sudah belanja.");
  keranjang = [];
  localStorage.removeItem("keranjang");
  loadKeranjang();
}

if (window.location.pathname.includes("keranjang.html")) {
  loadKeranjang();
}
