"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createSpaceSchema, CreateSpaceFormData } from "@/schemas/space.schema";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import { useCreateSpace } from "@/hooks/useSpaces";
import { uploadImage } from "@/lib/uploadImage";

const categories = ["Co-working", "Meeting Room", "Studio", "Event Venue"];

const amenities = [
  "WiFi",
  "Parking",
  "Air Conditioning",
  "Projector",
  "Coffee",
  "Kitchen",
  "Meeting Room",
  "Printer",
];

export default function AddSpaceForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateSpaceFormData>({
    resolver: zodResolver(createSpaceSchema),

    defaultValues: {
      title: "",
      shortDescription: "",
      description: "",
      imageUrl: "",
      category: "",
      location: "",
      price: 0,
      capacity: 1,
      availableFrom: "",
      hostName: "",
      amenities: [],
      featured: false,
      status: "approved",
    },
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const router = useRouter();

  const { mutate: createSpace, isPending } = useCreateSpace();

  const onSubmit = async (data: CreateSpaceFormData) => {
    try {
      if (!selectedFile) {
        toast.error("Please select an image");
        return;
      }

      // Upload image to ImgBB
      const imageUrl = await uploadImage(selectedFile);

      console.log("Uploaded Image URL:", imageUrl);

      // Create payload
      const payload = {
        ...data,
        imageUrl,
      };
      console.log("Form Data:", payload);
      createSpace(payload, {
        onSuccess: (response) => {
          toast.success(response.message);

          reset();
          setSelectedFile(null);

          router.push("/dashboard/my-spaces");
        },

        onError: (error: any) => {
          toast.error(
            error?.response?.data?.message ?? "Failed to create space",
          );
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Image upload failed");
    }
  };

  return (
    <div className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* ================= Basic Information ================= */}

        <div>
          <h2 className="mb-6 text-xl font-bold">Basic Information</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Space Title</legend>

              <input
                {...register("title")}
                type="text"
                placeholder="Enter space title"
                className="input input-bordered w-full"
              />

              {errors.title && (
                <p className="mt-1 text-sm text-error">
                  {errors.title.message}
                </p>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category</legend>

              <select
                {...register("category")}
                defaultValue=""
                className="select select-bordered w-full"
              >
                <option value="" disabled>
                  Select Category
                </option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {errors.category && (
                <p className="mt-1 text-sm text-error">
                  {errors.category.message}
                </p>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Location</legend>

              <input
                {...register("location")}
                type="text"
                placeholder="Dhaka, Bangladesh"
                className="input input-bordered w-full"
              />

              {errors.location && (
                <p className="mt-1 text-sm text-error">
                  {errors.location.message}
                </p>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Host Name</legend>

              <input
                {...register("hostName")}
                type="text"
                placeholder="Host name"
                className="input input-bordered w-full"
              />

              {errors.hostName && (
                <p className="mt-1 text-sm text-error">
                  {errors.hostName.message}
                </p>
              )}
            </fieldset>
          </div>
        </div>

        {/* ================= Description ================= */}

        <div>
          <h2 className="mb-6 text-xl font-bold">Description</h2>

          <div className="space-y-6">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Short Description</legend>

              <textarea
                {...register("shortDescription")}
                rows={3}
                className="textarea textarea-bordered w-full"
                placeholder="Write a short description..."
              />

              {errors.shortDescription && (
                <p className="mt-1 text-sm text-error">
                  {errors.shortDescription.message}
                </p>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Full Description</legend>

              <textarea
                {...register("description")}
                rows={6}
                className="textarea textarea-bordered w-full"
                placeholder="Write the full description..."
              />

              {errors.description && (
                <p className="mt-1 text-sm text-error">
                  {errors.description.message}
                </p>
              )}
            </fieldset>
          </div>
        </div>

        {/* ================= Pricing ================= */}

        <div>
          <h2 className="mb-6 text-xl font-bold">Pricing & Availability</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Price</legend>

              <input
                {...register("price")}
                type="number"
                className="input input-bordered w-full"
                placeholder="$100"
              />

              {errors.price && (
                <p className="mt-1 text-sm text-error">
                  {errors.price.message}
                </p>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Capacity</legend>

              <input
                {...register("capacity")}
                type="number"
                className="input input-bordered w-full"
                placeholder="10"
              />

              {errors.capacity && (
                <p className="mt-1 text-sm text-error">
                  {errors.capacity.message}
                </p>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Available From</legend>

              <input
                {...register("availableFrom")}
                type="date"
                className="input input-bordered w-full"
              />

              {errors.availableFrom && (
                <p className="mt-1 text-sm text-error">
                  {errors.availableFrom.message}
                </p>
              )}
            </fieldset>
          </div>
        </div>

        {/* ================= Image ================= */}

        <div>
          <h2 className="mb-6 text-xl font-bold">Space Image</h2>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Upload Image</legend>

            <label
              htmlFor="image-upload"
              className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-base-300 bg-base-200/40 p-8 transition hover:border-primary hover:bg-base-200"
            >
              {preview ? (
                <div className="relative mb-4 h-56 w-full overflow-hidden rounded-xl">
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4 h-14 w-14 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                    />
                  </svg>

                  <p className="text-lg font-semibold">Click to upload</p>

                  <p className="mt-1 text-sm text-base-content/70">
                    PNG, JPG, JPEG (Max 10MB)
                  </p>
                </>
              )}

              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (!file) return;

                  setSelectedFile(file);
                  setPreview(URL.createObjectURL(file));
                }}
              />
            </label>

            {selectedFile && (
              <div className="mt-4 flex items-center justify-between rounded-xl bg-base-200 p-4">
                <div>
                  <p className="font-medium">{selectedFile.name}</p>

                  <p className="text-sm text-base-content/70">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>

                <button
                  type="button"
                  className="btn btn-sm btn-error btn-outline"
                  onClick={() => {
                    setSelectedFile(null);
                    setPreview("");
                  }}
                >
                  Remove
                </button>
              </div>
            )}

            {errors.imageUrl && (
              <p className="mt-2 text-sm text-error">
                {errors.imageUrl.message}
              </p>
            )}
          </fieldset>
        </div>

        {/* ================= Amenities ================= */}

        <div>
          <h2 className="mb-6 text-xl font-bold">Amenities</h2>

          <Controller
            control={control}
            name="amenities"
            render={({ field }) => (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {amenities.map((amenity) => (
                  <label
                    key={amenity}
                    className="label cursor-pointer justify-start gap-3"
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={field.value.includes(amenity)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          field.onChange([...field.value, amenity]);
                        } else {
                          field.onChange(
                            field.value.filter((item) => item !== amenity),
                          );
                        }
                      }}
                    />

                    <span>{amenity}</span>
                  </label>
                ))}
              </div>
            )}
          />
        </div>

        {/* ================= Extra ================= */}

        <div className="grid gap-6 md:grid-cols-2">
          <Controller
            control={control}
            name="featured"
            render={({ field }) => (
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />

                <span>Featured Space</span>
              </label>
            )}
          />

          {/* <fieldset className="fieldset">
            <legend className="fieldset-legend">
              Status
            </legend>

            <select className="select select-bordered w-full">
              <option>Available</option>
              <option>Maintenance</option>
              <option>Unavailable</option>
            </select>
          </fieldset> */}
        </div>

        {/* ================= Submit ================= */}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="btn bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-white"
          >
            {isPending ? (
              <>
                <span className="loading loading-spinner loading-xs" />
                Creating...
              </>
            ) : (
              "Add Space"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
