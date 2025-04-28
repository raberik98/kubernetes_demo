variable "project_name" {
  description = "This value will be used as a tag for the related AWS resources!"
  type        = string
}

variable "region" {
  description = "Selected region for AWS infrastructure!"
  type        = string
}

variable "profile" {
  description = "Selected AWS CLI profile!"
  type = string
}