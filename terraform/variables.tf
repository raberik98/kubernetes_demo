variable "region" {
  description = "Region for the provider"
  type = string
  default = "eu-central-1"
}

variable "profile" {
  description = "Profile for the region, likely the profile will assume a role"
  type = string
  default = "g-36"
}

variable "project_name" {
  description = "This value will be used as a tag for the related AWS resources!"
  type = string
}

# [cc-devops-34]
# role_arn = arn:aws:iam::000000000:role/OrganizationAccountAccessRole
# source_profile = cc