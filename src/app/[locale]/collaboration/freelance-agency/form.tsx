import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Form() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-3xl p-10 bg-white max-w-[500px]">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-black leading-[30px]">
            Register to Become Our Official Freelancer Agency
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="hs-radio-group"
                  className="shrink-0 -mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radio-group-1"
                />
                <label
                  htmlFor="hs-radio-group-1"
                  className="text-black ms-2 font-semibold"
                >
                  Perorangan
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  name="hs-radio-group"
                  className="shrink-0 -mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="hs-radio-group-2"
                />
                <label
                  htmlFor="hs-radio-group-2"
                  className="text-black ms-2 font-semibold"
                >
                  Perusahaan
                </label>
              </div>
            </div>
            <input
              type="text"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Nama Lengkap (KTP)"
            />
            <input
              type="text"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Nomor Telepon Aktif (Whatsapp)"
            />
            <input
              type="text"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Email Aktif"
            />
            <input
              type="text"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Nomor KTP"
            />
            <input
              type="file"
              className="block w-full px-3 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full"
            />
            <select
              id="bank_account"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              defaultValue={"account"}
            >
              <option value={"account"} className="text-gray-400">
                Akun Bank
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select
              id="bank_name"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              defaultValue={"bankName"}
            >
              <option value={"bankName"} className="text-gray-400">
                Nama Bank
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <input
              type="text"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Nomor Rekening"
            />
            <input
              type="text"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Nama Akun"
            />
            <input
              type="text"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Alamat Sesuai KTP"
            />
            <select
              id="provinsi"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              defaultValue={"province"}
            >
              <option value={"province"} className="text-gray-400">
                Provinsi
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select
              id="kabkota"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              defaultValue={"city"}
            >
              <option selected value={"city"} className="text-gray-400">
                Kabupaten/Kota
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select
              id="kecamatan"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              defaultValue={"subdistrict"}
            >
              <option value={"subdistrict"} className="text-gray-400">
                Kecamatan
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select
              id="kelurahan"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              defaultValue={"ward"}
            >
              <option selected value={"ward"} className="text-gray-400">
                Kelurahan
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <input
              type="text"
              className="py-2.5 sm:py-3 px-4 block w-full border-none rounded-lg bg-gray-200 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Kode Pos"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <Link href={`/${lang}/collaboration`}>
          <button className="px-8 py-3 font-bold text-white duration-300 ease-in-out rounded-full bg-bnext-orange hover:bg-orange-700">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
